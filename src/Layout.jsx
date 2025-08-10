import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
