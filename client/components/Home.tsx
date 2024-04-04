'use client';

import { useEffect, useState } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

interface ChecklistItem {
  id: string;
  user_email: string;
  title: string;
  progress: number;
  date: string;
}

const Home = () => {
	const loggedInUserEmail = "abhijay@test.com";
	const [tasks, setTasks  ] = useState<ChecklistItem[]>([]);
	const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI

	const getData = async () => {
		try {	
			const resposne = await fetch(`${SERVER_URI}/checklists/${loggedInUserEmail}`)
			const json = await resposne.json()
			setTasks(json)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	// sort by dates
	const sortedTaska = tasks?.sort((a: ChecklistItem, b: ChecklistItem) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return (
		<section className="bg-white rounded-xl p-4 sm:p-10">
			
			<ListHeader listName="📋 All Checklists!" getData={getData}/>
			{
				sortedTaska.map((task)=> <ListItem getData={getData} key={task.id} task={task}/>)
			}

		</section>
	)
}

export default Home;