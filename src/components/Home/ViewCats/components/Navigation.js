import React, {useState, useEffect,useContext} from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
import { HTTP_CONSTANTS } from '../../../../config/http-constants'
import { requestHttp } from '../../../../config/http-server'
//import {CAT_LIST} from '../../../../data/db'
import {CatContext} from './../../../../contexts/CatContext'

export const Navigation = () => {

  //La linea siguiente es equivalente a decir cat = CAT_LIST[0]
  const[catList, setCatList] = useState([])
  const[cat, setCat] = useState({})
  const[indexCat, setIndexCat] = useState(-1)
  const[loading, setLoading] = useState(true)
  const {catInteraction, setCatInteraction,reloadCats,setReloadCats} = useContext(CatContext)


  const getCatList = async () => {
    try {
      const endpoint = HTTP_CONSTANTS.catList
      const response = await requestHttp('get', endpoint)
      //console.log(response)
      const { catsAvailable } = response
      //console.log('Response: ', response)
      setCatList(catsAvailable)
      setIndexCat(0)
      
    } catch (err) {
      console.log(err)
    }
  }

  useEffect (() => {

    if(reloadCats){
      setReloadCats(false);
      const newCatList = catList.filter((_, key) => key != indexCat )
      setCatList([...newCatList])
      if (newCatList.length > 0) {
        goNext()
      } else {
        setLoading(true)
      }
    }
    
    return () => {}

  }, [reloadCats])

  const goBack = () => {
      console.log('go back')
      //let newIndex = indexCat - 1;
      let newIndex = indexCat == 0 ? catList.length - 1 : indexCat - 1
      setIndexCat(newIndex)
      //setCat(CAT_LIST[newIndex])
  }

  const goNext = () => {
      console.log('go Next')
      let newIndex = indexCat == catList.length - 1 ? 0 : indexCat + 1
      //let newIndex = indexCat + 1;
      setIndexCat(newIndex)
      //setCat(CAT_LIST[newIndex])
  }

  useEffect(() => {
    getCatList()
    return () => {}
  }, [])

  useEffect( () => {
    //console.log('Cat List: ', catList)
    if (catList && catList.length > 0) {
      setCat(catList[indexCat])
      setCatInteraction(catList[indexCat]._id)
      setLoading(false)
    }
    return () => {
        // Puede estar vacío
        // Cerrar un socket para que no siga escuchando, etc
    } //Saneamiento
  }, [indexCat])

  return(
    <div className="navigation">
      {loading == false &&
      <>
        <NavigationIcon onPress={goBack} name="arrow-undo" />
        <Couple
            image={cat.image}
            nick={cat.nick}
            bio={cat.bio}
        />
        <NavigationIcon onPress={goNext} name="arrow-redo" />
      </>
      }
    </div>
  )  
}
