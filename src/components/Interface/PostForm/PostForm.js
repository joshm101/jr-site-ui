import React, { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import BasicInfo from './BasicInfo'
import ThumbnailSelection from './ThumbnailSelection'
import ImagesSelection from './ImagesSelection'
import {
  default as FormActions,
  Back,
  Next,
  Submit
} from './FormActions'
import FormErrors from './FormErrors'
import {
  MIN_STEP,
  MAX_STEP,
  STEP_IDS,
  CURRENT_STEP_ROOT,
  STEPS
} from './PostForm.constants'
import { useCreatePost } from '../../../hooks'

import styles from './styles'

const useStyles = makeStyles(styles)

const updateStep = stepDifference =>
  currentStep => currentStep + stepDifference

const incrementStep = updateStep(1)
const decrementStep = updateStep(-1)

const canIncrementStep = (currentStep, maxStep) => (
  incrementStep(currentStep) <= maxStep
)

const canDecrementStep = (currentStep, minStep) => (
  decrementStep(currentStep) >= minStep
)

const initialFormValues = {
  title: '',
  description: '',
  embedContent: '',
  featured: false,
  thumbnailImage: '',
  images: []
}

const ROOT_ELEMENT_ID = 'pf'

function PostForm({ onSubmit }) {
  const [ currentStep, setCurrentStep ] = useState(1)
  const [ formState, formFieldInitializers ] = (
    useFormState(initialFormValues)
  )

  const { state: createPostState } = useCreatePost()
  const { submitting: submittingForm } = createPostState

  const classes = useStyles()

  const { validity, touched, values, errors } = formState

  const handleSubmitClick = event => {
    event.preventDefault()

    const { values: postData } = formState
    onSubmit(
      {
        ...postData,
        type: '5dd20cffc8eba3001c02db6e' // TODO: REMOVE HARDCODED DEFAULT TYPE
      }
    )
  }

  const handleNextButtonClick = () => {
    if (canIncrementStep(currentStep, MAX_STEP)) {
      setCurrentStep(
        incrementStep(currentStep)
      )
    }
  }

  const handlePrevButtonClick = () => {
    if (canDecrementStep(currentStep, MIN_STEP)) {
      setCurrentStep(
        decrementStep(currentStep)
      )
    }
  }

  const actionClasses = (currentStep) => {
    switch (currentStep) {
      case 1:
        return classes.basicInfo
      case 2:
      case 3:
        return classes.imageSelection
      default:
        return undefined
    }
  }

  const formHasValidationErrors = Object.values(validity).some(value => !value)
  const formTouched = Object.values(touched).some(fieldTouched => fieldTouched)
  const hasAtLeastOneImage = values.images.length > 0
  const hasThumbnail = values.thumbnailImage
  const requiredFieldHasValue = fieldName => values[fieldName]
  const hasTitle = requiredFieldHasValue('title')

  const submitDisabled = (
    formHasValidationErrors ||
    !formTouched ||
    !hasAtLeastOneImage ||
    !hasTitle
  )

  const formErrors = [
    !hasTitle && (
      'Post must have a title.'
    ),
    !hasThumbnail && (
      'You must select a cover image for the post.'
    ),
    !hasAtLeastOneImage && (
      'You must select at least one image for the post.'
    )
  ].filter(error => error)

  const getStepNode = id => {
    const {
      POST_INFO,
      POST_COVER_IMAGE,
      POST_IMAGES
    } = STEP_IDS

    switch (id) {
      case POST_INFO:
        return (
          <div className={classes.basicInfo}>
            <BasicInfo
              fieldInitializers={formFieldInitializers}
              errors={errors}
            />
          </div>
        )
      case POST_COVER_IMAGE:
        return (
          <div className={classes.imageSelection}>
            <ThumbnailSelection fieldInitializers={formFieldInitializers} />
          </div>
        )
      case POST_IMAGES:
        return (
          <div className={classes.imageSelection}>
            <ImagesSelection fieldInitializers={formFieldInitializers} />
          </div>
        )
      default:
        return null
    }
  }

  const backButton = (
    <Back
      onClick={handlePrevButtonClick}
      disabled={currentStep === MIN_STEP}
    />
  )

  const nextButton = (
    <Next
      data-test-id={`${ROOT_ELEMENT_ID}--actions-next`}
      onClick={handleNextButtonClick}
      disabled={currentStep === MAX_STEP}
    />
  )

  const submitButton = (
    <Submit
      onClick={handleSubmitClick}
      disabled={submitDisabled || submittingForm}
      submitting={submittingForm}
    >
      {submittingForm ?
        'Submitting...' :
        'Done'
      }
    </Submit>
  )

  const renderCurrentStep = (steps, currentStepIndex) => {
    const stepId = steps[currentStepIndex].id
    const dataTestId = `${CURRENT_STEP_ROOT}--${stepId}`

    return (
      <div data-test-id={dataTestId}>
        <Typography variant="h5">
          {steps[currentStepIndex].title}
        </Typography>
        <div className={classes.stepContent}>
          <div>{getStepNode(stepId)}</div>
        </div>
      </div>
    )
  }

  return (
    <form autoComplete="off" className={classes.root}>
      {renderCurrentStep(STEPS, currentStep - 1)}
      <FormActions
        className={actionClasses(currentStep)}
        backButton={backButton}
        nextButton={nextButton}
        submitButton={submitButton}
        showSubmit={currentStep === MAX_STEP}
        numSteps={STEPS.length}
        activeStep={currentStep - 1}
      />
      {currentStep === MAX_STEP && formErrors.length > 0 &&
        <FormErrors
          errors={formErrors}
          className={classes.formErrors}
          errorClassName={classes.formError}
        />
      }
    </form>
  )
}

export default PostForm
export { ROOT_ELEMENT_ID, MAX_STEP, MIN_STEP }
