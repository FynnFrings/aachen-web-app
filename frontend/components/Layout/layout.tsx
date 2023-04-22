import React from "react";
import Header from "./header";
import Footer from "./footer";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    //Set for all pages height and width to full screen
    <div className="h-screen w-screen">
      <Header />
      <main className="px-[4%] lg:px-[5%]" {...props}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
