import { ToastContainer } from "react-toastify";
import Aside from "./components/Aside";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function MainLayout({ children }: { children: any }): JSX.Element {
  return (
    <>
      <div className=" w-screen text-secondary bg-black h-screen">
        <Header />
        <div className="flex h-[calc(100vh_-_56px)]">
          <Aside />
          <div className="bg-customDark2 m-1 rounded-md w-screen max-h-full">
            <div className="h-[calc(100%_-_44px)]">{children}</div>
            <div className="h-11 mx-3">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        theme="light"
      />
    </>
  );
}

export default MainLayout;
