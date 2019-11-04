import React, { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import { makeStyles } from '@material-ui/styles'

import Typography from '@material-ui/core/Typography'

import BasicInfo from './BasicInfo'
import ThumbnailSelection from './ThumbnailSelection'
import ImagesSelection from './ImagesSelection'
import FormActions, { Back, Next, Submit } from './FormActions'
import FormErrors from './FormErrors'

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

function PostForm() {
  const MIN_STEP = 1
  const MAX_STEP = 3

  const [ currentStep, setCurrentStep ] = useState(1)
  const [ formState, formFieldInitializers ] = (
    useFormState(initialFormValues)
  )

  const classes = useStyles()

  console.log(formState)
  const { validity, touched, values, errors } = formState

  const handleSubmitClick = event => {
    event.preventDefault()

    console.log(event)

    console.log('form state on submit: ', formState)
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

  const steps = [
    {
      title: 'Post Info',
      node: (
        <div className={classes.basicInfo}>
          <BasicInfo
            fieldInitializers={formFieldInitializers}
            errors={errors}
          />
        </div>
      )
    },
    {
      title: 'Post Cover',
      node: (
        <div className={classes.imageSelection}>
          <ThumbnailSelection fieldInitializers={formFieldInitializers} />
        </div>
      )
    },
    {
      title: 'Post Images',
      node: (
        <div className={classes.imageSelection}>
          <ImagesSelection fieldInitializers={formFieldInitializers} />
        </div>
      )
    }
  ]

  console.log('currentStep: ', currentStep)

  const backButton = (
    <Back
      onClick={handlePrevButtonClick}
      disabled={currentStep === MIN_STEP}
    />
  )

  const nextButton = (
    <Next
      onClick={handleNextButtonClick}
      disabled={currentStep === MAX_STEP}
    />
  )

  const submitButton = (
    <Submit
      onClick={handleSubmitClick}
      disabled={submitDisabled}
    />
  )

  const renderCurrentStep = (steps, currentStepIndex) => (
    <>
      <Typography variant="h5">
        {steps[currentStepIndex].title}
      </Typography>
      <div className={classes.stepContent}>
        <div>{steps[currentStepIndex].node}</div>
      </div>
    </>
  )

  return (
    <form autoComplete="off" className={classes.root}>
      {renderCurrentStep(steps, currentStep - 1)}
      <FormActions
        className={actionClasses(currentStep)}
        backButton={backButton}
        nextButton={nextButton}
        submitButton={submitButton}
        showSubmit={currentStep === MAX_STEP}
        numSteps={steps.length}
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
