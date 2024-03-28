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
	const userEmail = "abhijay@test.com";
	const [tasks, setTasks  ] = useState<ChecklistItem[]>([]);

	const getData = async () => {
		try {	
			const resposne = await fetch(`http://192.168.29.170:8000/checklists/${userEmail}`)
			const json = await resposne.json()
			setTasks(json)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	console.log(tasks)

	// sort by dates
	const sortedTaska = tasks?.sort((a: ChecklistItem, b: ChecklistItem) => new Date(a.date).getTime() - new Date(b.date).getTime());

	return (
		<section className="bg-white rounded-xl p-4 sm:p-10">
			
			<ListHeader listName="🏝️ holiday checklist!"/>
			{
				sortedTaska.map((task)=> <ListItem key={task.id} task={task}/>)
			}

		</section>
	)
}

export default Home;