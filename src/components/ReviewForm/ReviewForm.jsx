import { Formik, Form, Field, ErrorMessage } from 'formik'
import { string, number, object } from 'yup'
import Stars from '../Stars/Stars'
import styles from './ReviewForm.module.css'

const schema = object({
	starRating: number().min(1, 'Please select a star rating'),
	headline: string()
		.min(2, 'Minimum 2 characters')
		.max(60, 'Maximum 60 characters')
		.required('Please enter your headline'),
	writtenReview: string()
		.max(250, 'Maximum 250 characters')
		.required('Please enter your written review'),
})

const ReviewForm = ({
	initialValues = {
		starRating: 0,
		headline: '',
		writtenReview: '',
	},
	currentUser,
	reviews,
	setReviews,
	setWritingReview,
	isEditing,
}) => {
	const submitForm = (values, submitProps) => {
		setWritingReview('')
		if (isEditing) {
			setReviews(
				[...reviews].map((review) =>
					review.user == currentUser.name
						? { user: currentUser.name, ...values }
						: review
				)
			)
			return
		}

		setReviews([{ user: currentUser.name, ...values }, ...reviews])
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={submitForm}
			validateOnChange={false}>
			{(formik) => {
				return (
					<Form className={styles.form}>
						<div className={styles.section}>
							<label htmlFor="starRating">Overall Rating</label>
							<Stars
								count={formik.values['starRating']}
								setCount={(count) => formik.setFieldValue('starRating', count)}
								starSize="2.4rem"
								starGap="0.4rem"
							/>
							<ErrorMessage className="error" component="p" name="starRating" />
						</div>
						<div className={styles.section}>
							<label htmlFor="headline">Headline</label>
							<Field
								name="headline"
								type="text"
								id="headline"
								maxLength="60"
								placeholder="What's most important to know?"
							/>
							<ErrorMessage className="error" component="p" name="headline" />
						</div>
						<div className={styles.section}>
							<label htmlFor="writtenReview">Written review</label>
							<Field
								className={styles.longText}
								name="writtenReview"
								id="writtenReview"
								component="textarea"
								maxLength="250"
								placeholder="What did you like or dislike? What did you use this product for?"
							/>
							<ErrorMessage
								className="error"
								component="p"
								name="writtenReview"
							/>
						</div>
						<div className={styles.submitRow}>
							<button
								type="button"
								className={styles.buttonSecondary}
								onClick={() => setWritingReview('')}>
								Cancel
							</button>
							<button type="submit" className={styles.buttonPrimary}>
								{isEditing ? 'Save' : 'Add'}
							</button>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}

export default ReviewForm
