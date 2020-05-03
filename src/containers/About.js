import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  Suspense,
} from "react";

const Profile = React.lazy(() => import("./Profile"));

const AboutMe = React.memo((props) => {
  const { dataFetch } = props;

  useEffect(() => {
    dataFetch("Child - About Me");
  }, [dataFetch]);
  return <div>About Me</div>;
});

const About = () => {
  const [counter1, setCounter1] = useState(0);

  const fruits = useMemo(() => ["orange", "banana", "apple"], []);

  const dataFetch = useCallback((str) => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => console.log(str, res.data));
  }, []);

  useEffect(() => {
    dataFetch("Parent - About");
  }, [dataFetch]);

  return (
    <div>
      <div>
        <p>Counter1: {counter1}</p>

        <button type="button" onClick={() => setCounter1(counter1 + 1)}>
          Update Counter
        </button>
      </div>

      <AboutMe fruits={fruits} dataFetch={dataFetch} />

      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    </div>
  );
};

export default About;
