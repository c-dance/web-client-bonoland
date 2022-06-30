import React, { useState, useEffect } from 'react';
import NewsList from '../../components/News/NewsList/NewsList';
import Section from '../../components/ui/Section/Section';
import { useNavigate } from 'react-router';
import { getNewsList } from '../../api/news';
import { useGet } from "../../hooks";
import { isBrowser, isMobile } from 'react-device-detect';

const NewsListContainer = () => {

    const navigate = useNavigate();
    const onCloseClick = () => { navigate('/'); }

    const [ newsList, setNewsList ] = useState([]);
    const [ loading, error, data, setGet ] = useGet({});

    useEffect(() => {
        setGet(getNewsList);
    }, []);

    useEffect(() => {
        if(data && data.arrayResult) setNewsList(data.arrayResult);
    }, [data]);
    
    return (
        <Section
            title={ "뉴스" }
            themeColor={ "secondary" }
            close={ isBrowser && true }
            back={ isMobile && true }
            onCloseClick={ onCloseClick }
        >
            <NewsList 
                news = { newsList } 
                loading={ loading }
                error={ error }   
            />
        </Section>
    )

};

export default NewsListContainer;