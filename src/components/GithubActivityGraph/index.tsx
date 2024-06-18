'use client'

import { HeaderPrimary } from '../Shared/Heading';
import GitHubCalendar from 'react-github-calendar';

function GithubActivityGraph() {

    return(
        <div className='mt-5'>
            <HeaderPrimary className="mb-4">Trying to stay active</HeaderPrimary>
            <div className='flex justify-center w-full mobile:w-[350px] mobile:mx-auto'>
                <GitHubCalendar username="tennga" />
            </div>
        </div>
    )
};

export default GithubActivityGraph;