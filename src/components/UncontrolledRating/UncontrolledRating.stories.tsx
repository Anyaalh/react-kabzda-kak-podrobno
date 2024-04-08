import { UncontrolledRating } from './UncontrolledRating';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
};

const callback = action("rating changing inside component")

export const EmptyRating = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>


