import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div id="ezoic-pub-ad-placeholder-101"></div>
      <script>
        ezstandalone.cmd.push(function () {ezstandalone.showAds(104)});
      </script>
      <div>{children}</div>
      <footer>
        <div id="ezoic-pub-ad-placeholder-101"></div>
        <script>
          ezstandalone.cmd.push(function () {ezstandalone.showAds(113)});
        </script>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
