import { Time } from 'container/TopNav/DateTimeSelection/config';
import { Time as TimeV2 } from 'container/TopNav/DateTimeSelectionV2/config';
import { GlobalTime } from 'types/actions/globalTime';

export interface GlobalReducer {
	maxTime: GlobalTime['maxTime'];
	minTime: GlobalTime['minTime'];
	loading: boolean;
	selectedTime: Time | TimeV2;
	isAutoRefreshDisabled: boolean;
	selectedAutoRefreshInterval: string;
}
