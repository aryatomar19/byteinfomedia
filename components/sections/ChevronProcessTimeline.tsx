export type ChevronProcessStep = {
  title: string;
  description?: string;
};

function ChevronStepContent({ title, description }: ChevronProcessStep) {
  return (
    <div className="px-1">
      <h3 className="text-sm font-extrabold leading-tight text-[#0A0F1C] sm:text-base lg:text-[0.95rem] xl:text-base">
        {title}
      </h3>
      {description ? (
        <p className="mt-0.5 text-[0.6875rem] leading-4 text-[#334155] sm:text-xs lg:leading-5">{description}</p>
      ) : null}
    </div>
  );
}

export function ChevronProcessTimeline({ steps }: { steps: ChevronProcessStep[] }) {
  const lastIndex = steps.length - 1;

  return (
    <>
      {/* Desktop — connected horizontal chevrons */}
      <div className="process-chevron-track hidden w-full lg:flex">
        {steps.map((step, index) => {
          const position =
            index === 0 ? "first" : index === lastIndex ? "last" : "middle";

          return (
            <div
              key={step.title}
              className={`process-chevron-item process-chevron-item--${position}`}
              style={{ zIndex: steps.length - index }}
            >
              <div className={`process-chevron-shell process-chevron-shell--${position}`}>
                <div className={`process-chevron-step process-chevron-step--${position}`}>
                  <ChevronStepContent title={step.title} description={step.description} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile — stacked downward chevrons */}
      <div className="process-chevron-track-mobile flex flex-col gap-2 lg:hidden">
        {steps.map((step, index) => {
          const position = index === lastIndex ? "last" : "arrow";

          return (
            <div key={step.title} className="process-chevron-item-mobile">
              <div className={`process-chevron-shell-mobile process-chevron-shell-mobile--${position}`}>
                <div className={`process-chevron-step-mobile process-chevron-step-mobile--${position}`}>
                  <ChevronStepContent title={step.title} description={step.description} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
