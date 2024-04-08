import { UncontrolledOnOff } from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
};


export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action('on or off clicked')} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action('on or off clicked')} />
