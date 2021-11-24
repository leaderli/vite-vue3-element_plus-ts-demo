export interface Tab {
	index: number;
	path: string;
	title: string;
}
export interface Tabs {
	tabs: Array<Tab>;
	activeTab: string 
}
