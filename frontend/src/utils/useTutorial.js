import { useState } from "react";

export function useTutorial(steps){
    const [currentStep,setCurrentStep] = useState(0)

    return{
        currentStep,
        currentComponent:steps[currentStep],
        nextStep: () => setCurrentStep(prevStep=> prevStep + 1),
        previousStep:()=> setCurrentStep(prevStep=> prevStep - 1),
        lastStep: (currentStep + 1) == steps.length ? true : false,
    }
}