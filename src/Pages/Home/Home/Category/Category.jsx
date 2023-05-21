import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToysList from "./ToysList";
import _ from "lodash";

const Category = ({ toys }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const uniqueToys = _.uniqBy(toys, function (e) {
    return e.subcategory;
  });
  console.log("uniqueToys", uniqueToys);
  return (
    
    <div className="container mx-auto mt-20">
          <p className="text-[#ff1276] text-5xl tracking-[.25em] mb-3 text-center">Category</p>          
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {uniqueToys.map((toy) =>
            toy.subcategory ? <Tab>{toy.subcategory}</Tab> : null
          )}
        </TabList>
        {uniqueToys.map((toy) =>
          toy.subcategory ? (
            <TabPanel>
              <ToysList
                subcategory={toy.subcategory}
                toys={toys.filter(
                  (filteredToys) => filteredToys.subcategory === toy.subcategory
                )}
              />
            </TabPanel>
          ) : null
        )}
      </Tabs>
    </div>
  );
};

export default Category;
