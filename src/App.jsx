import { useState } from "react";
import { Steps } from "./components/ui";
import SNTOne from "./components/steps/Step_Note_One";
import SNTTwo from "./components/steps/Step_Note_Two";

function App() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center bg-gray-50">
        <div className="relative border w-full max-w-lg min-h-screen bg-white overflow-hidden">
          <div>
            <div className="py-2 px-4">
              <h1 className="font-sans font-bold text-[20px] text-gray-600">
                Minotes
              </h1>
            </div>
            <hr />
          </div>
          <Steps index={step}>
            {step === 0 && (
              <SNTOne onNext={() => setStep(step + 1)} setStep={setStep} />
            )}
            {step === 1 && <SNTTwo onBack={() => setStep(step - 1)} />}
          </Steps>
        </div>
      </div>
    </>
  );
}

export default App;
