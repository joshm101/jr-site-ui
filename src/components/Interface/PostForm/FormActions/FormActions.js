import React from 'react'
import classname from 'classnames'
import MobileStepper from '@material-ui/core/MobileStepper'
import { makeStyles } from '@material-ui/core/styles'

import styles from '../styles'

const useStyles = makeStyles(styles)

function FormActions(props) {
  const {
    backButton,
    nextButton,
    submitButton,
    showSubmit,
    className,
    numSteps,
    activeStep
  } = props

  const classes = useStyles()

  const rootClasses = classname(
    classes.actions,
    className
  )

  const backButtonClasses = classname(
    backButton.props.className,
    classes.backButton
  )

  const nextButtonClasses = classname(
    nextButton.props.className,
    classes.nextButton
  )

  const submitButtonClasses = classname(
    submitButton.props.className,
    classes.submitButton
  )

  const augmentedBackButton = (
    React.cloneElement(
      backButton,
      {
        ...backButton.props,
        className: backButtonClasses
      }
    )
  )

  const augmentedNextButton = (
    React.cloneElement(
      nextButton,
      {
        ...nextButton.props,
        className: nextButtonClasses
      }
    )
  )

  const augmentedSubmitButton = (
    React.cloneElement(
      submitButton,
      {
        ...submitButton.props,
        className: submitButtonClasses
      }
    )
  )

  return (
    <MobileStepper
      variant="dots"
      steps={numSteps}
      position="static"
      activeStep={activeStep}
      className={rootClasses}
      backButton={augmentedBackButton}
      nextButton={
        !showSubmit ?
          augmentedNextButton
          :
          augmentedSubmitButton
      }
    />
  )
}

export default FormActions
