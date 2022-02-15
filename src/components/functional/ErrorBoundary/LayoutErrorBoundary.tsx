import type { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: FC<ErrorFallbackProps> = (props) => {
  return (
    <div role="alert">
      <p>エラーが発生しました。</p>
      <pre>{props.error.message}</pre>
      {/* eslint-disable-next-line react/jsx-handler-names */}
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  );
};

// NOTE: onReset()には、エラーからの復帰処理を渡す
type LayoutErrorBoundaryProps = {
  children: ReactNode;
  onReset?: () => void;
};

export const LayoutErrorBoundary: FC<LayoutErrorBoundaryProps> = (props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={props.onReset}>
      {props.children}
    </ErrorBoundary>
  );
};
