import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import NameCard from '../components/NameCard'

const babyNames = [
    { yearOfBirth: 2016, gender:'male', ethnicity:"ASIAN AND PACIFIC ISLANDER", name:"Olivia",numberOfBabies:172, NamesRank:1},
    { yearOfBirth: 2016, gender: 'male', ethnicity: "ASIAN AND PACIFIC ISLANDER", name: "Oliver", numberOfBabies: 172, NamesRank: 1 },
    { yearOfBirth: 2016, gender: 'male', ethnicity: "ASIAN AND PACIFIC ISLANDER", name: "Ethan", numberOfBabies: 172, NamesRank: 1 },
    { yearOfBirth: 2016, gender: 'male', ethnicity: "ASIAN AND PACIFIC ISLANDER", name: "Lucas", numberOfBabies: 172, NamesRank: 1 },
];

const NameGenarate = () => {
    const [uiData, setUiData] = useState([]);
    const [showUI, setShowUI] = useState(false);
    const generateUiData = () => {
        const newData = babyNames.map(item => item);
        setUiData(newData);
        setShowUI((prev) => !prev)
    }

    console.log(uiData)

    return (
        <div>
            <Grid container justifyContent={"center"} width='xl'>
                <Grid item >
                <Button variant="outlined" onClick={generateUiData}>Male</Button>

                </Grid>
                <Grid item>
            <Button variant="outlined" onClick={generateUiData}>Female</Button>
                </Grid>
             </Grid>

            <Grid container spacing={2} width='xl' >
             {showUI && uiData.map((item, index) => (

<Grid item xs={3} >

<NameCard uiData={item} key={index} />
</Grid>
))}
            </Grid>

        </div>
    );
};

export default NameGenarate;