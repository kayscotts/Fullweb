import { useVerifyQuery } from "./redux/api/apiSlice";

const Ret = () => {
  const { data, isLoading, isError, error } = useVerifyQuery(); // Include 'error'

  return (
    <>
      <h1>No matter what</h1>
      <div>{isLoading && <h1>Loading</h1>}</div>
      <div>
        {isError && (
          <div>
            <h1>Error:</h1>
            <pre>{JSON.stringify(error, null, 2)}</pre> {/* Display error details */}
            {/* OR, for a simpler message: */}
            {/* <p>{error?.data?.message || error?.error || "An error occurred."}</p> */}
          </div>
        )}
      </div>
      <div>{data && <h1>{data.isLogin}</h1>}</div>
    </>
  );
};

export default Ret;

