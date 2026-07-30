import Layout from "./components/layout/Layout/Layout";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Stats from "./components/sections/Stats/Stats";
import Timeline from "./components/sections/Timeline/Timeline";
function App() {

    return (

        <Layout>

            <Hero />
            
            <About />

            <Stats />

            <Timeline />
        </Layout>

    );

}

export default App;