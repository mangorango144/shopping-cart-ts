import { Link, useRouteError } from "react-router-dom";

export function ErrorPage(): JSX.Element {
  const error = useRouteError();

  function isValidError(
    err: unknown
  ): err is { statusText?: string; message?: string } {
    return (
      typeof err === "object" &&
      err !== null &&
      ("statusText" in err || "message" in err)
    );
  }

  return (
    <>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isValidError(error)
            ? error.statusText || error.message
            : "Unknown error"}
        </i>
      </p>
      <Link to="/">Return to home page</Link>
    </>
  );
}
