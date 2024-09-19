import { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../assets/Loading";

const SuspenseRoute = ({ Element }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Element />
    </Suspense>
  );
};

SuspenseRoute.propTypes = {
  Element: PropTypes.node.isRequired,
};
export default SuspenseRoute;
