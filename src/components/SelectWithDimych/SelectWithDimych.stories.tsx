import {SelectWithDimych} from "./SelectWithDimych";
import {action} from "@storybook/addon-actions";
import {useMemo, useState} from "react";

export default {
    title: "Select With Dimych",
    component: SelectWithDimych
}
export const FindL = () => {
    const [value, setValue] = useState("2")
    let items = [
        {value: "1", title: "Belarus", countryId: "1", population: "100000"},
        {value: "2", title: "Russia", countryId: "2", population: "10000"},
        {value: "3", title: "Ukraine", countryId: "1", population: "10000"},
        {value: "4", title: "USA", countryId: "3", population: "1000"},
        {value: "5", title: "Poland", countryId: "3", population: "10"},
        {value: "6", title: "Georgia", countryId: "2", population: "10000"},
        {value: "7", title: "Litva", countryId: "1", population: "1000"},
        {value: "8", title: "Latvia", countryId: "2", population: "100"},
        {value: "9", title: "Germany", countryId: "3", population: "100000"}
    ]

    const newItem = useMemo(()=> {
        return items.filter(i=> i.title.indexOf("l") > -1)
    }, [items])

    return (
        <SelectWithDimych value={value}
                          onChange={setValue}
                          items={newItem}/>
    )
}
export const CountryId2 = () => {
    const [value, setValue] = useState("2")
    let items = [
        {value: "1", title: "Belarus", countryId: "1", population: "100000"},
        {value: "2", title: "Russia", countryId: "2", population: "10000"},
        {value: "3", title: "Ukraine", countryId: "1", population: "10000"},
        {value: "4", title: "USA", countryId: "3", population: "1000"},
        {value: "5", title: "Poland", countryId: "3", population: "10"},
        {value: "6", title: "Georgia", countryId: "2", population: "10000"},
        {value: "7", title: "Litva", countryId: "1", population: "1000"},
        {value: "8", title: "Latvia", countryId: "2", population: "100"},
        {value: "9", title: "Germany", countryId: "3", population: "100000"}
    ]

    const newItem = useMemo(()=> {
        return items.filter(i=> i.countryId === "2")
    }, [items])

    return (
        <SelectWithDimych value={value}
                          onChange={setValue}
                          items={newItem}/>
    )
}
export const PopulationMoreThenOneThousand = () => {
    const [value, setValue] = useState("2")
    let items = [
        {value: "1", title: "Belarus", countryId: "1", population: 100000},
        {value: "2", title: "Russia", countryId: "2", population: 10000},
        {value: "3", title: "Ukraine", countryId: "1", population: 10000},
        {value: "4", title: "USA", countryId: "3", population: 1000},
        {value: "5", title: "Poland", countryId: "3", population: 10},
        {value: "6", title: "Georgia", countryId: "2", population: 10000},
        {value: "7", title: "Litva", countryId: "1", population: 1000},
        {value: "8", title: "Latvia", countryId: "2", population: 100},
        {value: "9", title: "Germany", countryId: "3", population: 100000}
    ]

    const newItem = useMemo(()=> {
        return items.filter(i=> i.population > 1000)
    }, [items])

    return (
        <SelectWithDimych value={value}
                          onChange={setValue}
                          items={newItem}/>
    )
}

export const WithoutValue = () => {

    const [value, setValue] = useState(null)
    const items = [
        {value: "1", title: "Belarus", countryId: "1", population: "100000"},
        {value: "2", title: "Russia", countryId: "2", population: "10000"},
        {value: "3", title: "Ukraine", countryId: "1", population: "10000"},
        {value: "4", title: "USA", countryId: "3", population: "1000"},
        {value: "5", title: "Poland", countryId: "3", population: "10"},
        {value: "6", title: "Georgia", countryId: "2", population: "10000"},
        {value: "7", title: "Litva", countryId: "1", population: "1000"},
        {value: "8", title: "Latvia", countryId: "2", population: "100"},
        {value: "9", title: "Germany", countryId: "3", population: "100000"}
    ]


    return (
        <SelectWithDimych onChange={setValue}
                          value={value}
                          items={items}/>
    )
}