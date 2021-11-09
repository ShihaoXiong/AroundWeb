import React, { useState } from 'react';
import SearchBar from './SearchBar';
import PhotoGallery from './PhotoGallery';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Home = () => {
	const [activeTab, setActiveTab] = useState('image');

	return (
		<div>
			<SearchBar />
			<div className='display'>
				<Tabs defaultActiveKey={activeTab} onChange={key => setActiveTab(key)}>
					<TabPane tab='Images' key='image'>
						<PhotoGallery />
					</TabPane>
					<TabPane tab='Videos' key='video'>
						<PhotoGallery />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default Home;
