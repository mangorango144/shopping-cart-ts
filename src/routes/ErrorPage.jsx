import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || String(error.message)}</i>
      </p>
      <Link to="/">Return to home page</Link>
    </>
  );
}
