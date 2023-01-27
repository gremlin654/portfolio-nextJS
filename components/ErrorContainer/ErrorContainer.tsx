import NeonTitle from '../NeonTitle/NeonTitle';

const ErrorContainer = () => {
  return (
    <div className="error-container">
      <NeonTitle text="404" />
      <NeonTitle text="Not found" tag="h2" />
    </div>
  );
};

export default ErrorContainer;
