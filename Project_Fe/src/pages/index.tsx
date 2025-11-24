import loadable from "@loadable/component";

const Loader = () => (
  <div className="h-screen w-full bg-white flex justify-center items-center">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>
);

// Home đc tải từ file ./home-page, trong qtrinh tải thì Loader đc thực thi
export const Home = loadable(async () => await import("./home-page"), {
  fallback: <Loader />
});

export const NotFoundPage = loadable(async () => await import("./not-found"), {
  fallback: <Loader />
});
