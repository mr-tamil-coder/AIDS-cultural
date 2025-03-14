import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Error from "./Components/Error.jsx";
import Footer from "./Components/Footer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body.jsx";
import TechEvent from "./Components/TechEvent.jsx";
import EventContainer from "./Components/EventContainer.jsx";
import EventDetails from "./Components/EventDetails.jsx";
import Circuit from "./Components/Circuit.jsx";
import CircuitTec from "./Components/CircuitTec.jsx";
import CircuitnTech from "./Components/CircuitnTech.jsx";
import NonCircuitTec from "./Components/NonCircuitTec.jsx";
import NonCircuitnTech from "./Components/NonCircuitnTech.jsx";
import NonCircuit from "./Components/NonCircuit.jsx";
import NewAbout from "./Components/NewAbout.jsx";
import Tracks from "./Components/Tracks.jsx";
import EventDescription from "./Components/EventDescription.jsx";
import Eloquence from "./Components/EventDescriptions/Track1/Eloquence.jsx";
import VizYourWay from "./Components/EventDescriptions/Track1/VizYourWay.jsx";
import EnergiaNova from "./Components/EventDescriptions/Track2/EnergiaNova.jsx";
import GhostOps from "./Components/EventDescriptions/Track1/GhostOps.jsx";
import FF from "./Components/EventDescriptions/NonTech/FF.jsx";
import BGMI from "./Components/EventDescriptions/NonTech/BGMI.jsx";
import Wizzup from "./Components/EventDescriptions/Track1/Wizzup.jsx";
import Contact from "./Components/Contact.jsx";
import CodeSprint from "./Components/EventDescriptions/Track1/CodeSprint.jsx";
import MatterMind from "./Components/EventDescriptions/Track1/MatterMind.jsx";
import Ciniphilia from "./Components/EventDescriptions/NonTech/Ciniphilia.jsx";
import MysteryVault from "./Components/EventDescriptions/NonTech/Reels.jsx";
// import DeadlyDeeds from "./Components/EventDescriptions/NonTech/DeadlyDeeds.jsx";
import Bizqueset from "./Components/EventDescriptions/Track2/Bizqueset.jsx";
import Batallia from "./Components/EventDescriptions/Track2/Batallia.jsx";
import TescaFlow from "./Components/EventDescriptions/Track2/TescaFlow.jsx";
import IPL from "./Components/EventDescriptions/NonTech/IplAuction.jsx";
import Cassedete from "./Components/EventDescriptions/Track2/Cassedete.jsx";
import TeamCarousel from "./Components/TeamCarousel.jsx";
import Online1 from "./Components/OnlineEve.jsx";
// cultural
import OnStage from "./Components/OnStage.jsx";
import GroupSinging from "./Components/onStage/GroupSinging.jsx";
import GroupDrama from "./Components/onStage/GroupDrama.jsx";
import GroupTraditional from "./Components/onStage/GroupTraditional.jsx"
import DumCharades from "./Components/onStage/DumCharades.jsx";
import VivadhaMedai from "./Components/onStage/VivadhaMedai.jsx";
import Photo from "./Components/EventDescriptions/NonTech/photography.jsx";
import Reel from "./Components/EventDescriptions/NonTech/Reels.jsx";
import Draw from "./Components/EventDescriptions/Track2/Drawing.jsx";
import Cricket from "./Components/EventDescriptions/Track2/GullyCricket.jsx";
// import DumCharades from "./Components/onStage/DumCharades.jsx";
// import DumCharades from "./Components/onStage/DumCharades.jsx";
import MaatriYosi from "./Components/offStage/MaatriYosi.jsx";
import OffStageEvents from "./Components/OffStageEvents.jsx";
import OffStage from "./Components/OffStage.jsx";
import OruPoiSol from "./Components/offStage/OruPoiSol.jsx";
import ReverseReading from "./Components/offStage/ReverseReading.jsx";
import RecallRace from "./Components/offStage/RecallRace.jsx";
import FirelessCookery from "./Components/offStage/FirelessCookery.jsx";
import Drawing from "./Components/offStage/Drawing.jsx";
import GullyCricket from "./Components/offStage/GullyCricket.jsx";
import GroupDance from "./Components/onStage/GroupDance.jsx";
import HairstyleShowdown from "./Components/onStage/HairstyleShowdown.jsx"
import Adaptune from "./Components/onStage/Adaptune.jsx"
import EssayEng from "./Components/EventDescriptions/NonTech/EssayEng.jsx"
import Venue from "./Components/Venue.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/events",
        element: <EventContainer />,
      },
      {
        path: "/group-singing",
        element: <GroupSinging />,
      },
      {
        path: "/group-drama",
        element: <GroupDrama />,
      },
      {
        path: "/group-traditional",
        element: <GroupTraditional />,
      },
      {
        path: "/group-dance",
        element: <GroupDance />,
      },
      {
        path: "/dumcharades",
        element: <DumCharades />,
      },
      {
        path: "/adaptune",
        element: <Adaptune />,
      },
      {
        path: "/adaptune",
        element: <DumCharades />,
      },  
      {
        path: "/hairstyle-showdown",
        element: <HairstyleShowdown />,
      }, 
      {
        path: "/vivadha-medai",
        element: <VivadhaMedai />,
      },  
      {
        path:"/photography",
        element: <Photo/>,
      },
      {
        path: "/vizyourway",
        element: <VizYourWay />,
      },
      {
        path: "/maathiYosi",
        element: <MaatriYosi />,
      },
      {
        path: "/oruPoiSol",
        element: <OruPoiSol />,
      },
      {
        path: "/reverseReading",
        element: <ReverseReading />,
      },
      {
        path: "/recallRace",
        element: <RecallRace />,
      },
      {
        path: "/firelessCookery",
        element: <FirelessCookery />,
      },
      {
        path: "/drawing",
        element: <Drawing />,
      },
      {
        path: "/gullyCricket",
        element: <GullyCricket />,
      },
      {
        path: "/essayeng",
        element: <EssayEng />,
      },
      {
        path: "/cassedete",
        element: <Cassedete />,
      },
      {
        path: "/batallia",
        element: <Batallia />,
      },
      {
        path: "/tescaflow",
        element: <TescaFlow />,
      },
      {
        path: "/ghostops",
        element: <GhostOps />,
      },
      {
        path: "/codesprint",
        element: <CodeSprint />,
      },
      {
        path: "/reels",
        element: <Reel/>,
      },
      {
        path:"/drawing",
        element: <Draw/>,
      },
       {
         path: "/gullycricket",
         element: <Cricket />,
       },

      {
        path: "/mattermind",
        element: <MatterMind />,
      },
      {
        path: "/ff",
        element: <FF />,
      },
      {
        path: "/bgmi",
        element: <BGMI />,
      },
      {
        path: "/iplauction",
        element: <IPL />,
      },
      {
        path: "/bizqueset",
        element: <Bizqueset />,
      },
      {
        path: "/circuit",
        element: <Circuit />,
      },
      {
        path: "/cinephilia",
        element: <Ciniphilia />,
      },
      {
        path: "/cassedete",
        element: <Cassedete />,
      },
      {
        path: "/offstage",
        element: <OffStage />,
      },
      {
        path: "/events/circuit-tech",
        element: <CircuitTec />,
      },
      {
        path: "/events/circuit-non-tech",
        element: <NonCircuitnTech />,
      },
      {
        path: "/onstage",
        element: <OnStage />,
      },
      {
        path: "/events/non-circuit-tech",
        element: <NonCircuitTec />,
      },
      {
        path: "/events/non-circuit-non-tech",
        element: <NonCircuitnTech />,
      },
      {
        path: "/event/paper",
        element: <EventDescription />,
      },

      {
        path: "/about",
        element: <NewAbout />,
      },
      {
        path: "/events/tech",
        element: <TechEvent />,
      },
      {
        path: "/events/tech/:id",
        element: <EventDetails />,
      },
   
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wizzup",
        element: <Wizzup />,
      },
      {
        path: "/team",
        element: <TeamCarousel/>,
      },
      {
        path: "/online",
        element: <Online1/>,
      },
      {
        path: "/venue",
        element: <Venue />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRouter} />
  </>
);