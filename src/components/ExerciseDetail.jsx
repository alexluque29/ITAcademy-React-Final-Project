import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import Detail from './Detail';
import Videos from './Videos';

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const {id} = useParams();

    useEffect(() => {
      const fetchExercisesData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);

      }
    
      fetchExercisesData();
    }, [id])
    

  return (
    <>
    <Detail exerciseDetail={exerciseDetail}/>
    <Videos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    </>
  )
}

export default ExerciseDetail;