const getPuzzle = async (wordCount) => {
    // Leaving the URL like this will match automatically the protocol.
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle.');
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    return await getCountry(location.country);

};

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all');
    if(response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Error fetching data.')
    }
};

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=6a8cfbbadb2d32');
    if(response.status === 200) {
        return response.json();
    } else {
        throw new Error('Failed to fetch data.');
    };
}