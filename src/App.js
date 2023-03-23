import React, {useEffect, useState} from 'react'
import Title from "./components/Title";
import Button from "./components/Button";
import AppWrapper from "./components/AppWrapper";
import CheckBox from "./components/CheckBox";
import CatImage from "./components/CatImage";
import {getRandomCatUrl} from "./utils/utils";
import config from "./config.json"

function App() {
    const [imageUrl, setImageUrl] = useState("");
    const [mode, setMode] = useState({enabled: false, refresh: false});
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        mode.refresh
            ? startRefresh(config.timeOut)
            : stopRefresh()
    }, [mode.refresh]);


    const updateImage = async () => {
        const _imageUrl = await getRandomCatUrl()
        setImageUrl(_imageUrl)
    }

    const refreshCat = async () => await updateImage()

    const startRefresh = timeOut => {
        const num = setInterval(refreshCat, timeOut)
        setIntervalId(num)
    }
    const stopRefresh = () => {
        clearInterval(intervalId)
    }

    const handleCheckboxRefresh = () => {
        setMode({enabled: false, refresh: !mode.refresh})
    }

    const handleCheckboxEnabled = () => {
        setMode({enabled: !mode.enabled, refresh: false})
    }

    const handleClick = async () => {
        if (mode.enabled) {
            setImageUrl('')
            await updateImage()
        }
    }


    return (
        <AppWrapper>
            <Title color={'saddlebrown'}>Randomizer cats</Title>

            <div>
                <CheckBox label={'Enabled'}
                          onChange={handleCheckboxEnabled}
                          isChecked={mode.enabled}
                />
                <CheckBox label={'Auto-refresh every 5 second'}
                          isChecked={mode.refresh}
                          onChange={handleCheckboxRefresh}
                />
            </div>

            <Button color="saddlebrown" onClick={handleClick} active={mode.enabled}>Get cat</Button>

            {(mode.enabled || mode.refresh) && <CatImage imageUrl={imageUrl}/>}
            {!mode.enabled && !mode.refresh && 'Click on one of the checkboxes'}
        </AppWrapper>
    );
}

export default App;
