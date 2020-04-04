import React, {useState, useEffect} from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'
import {CAT_LIST} from '../../../../data/db'

export const Navigation = () => {

  const[cat, setCat] = useState({})
  //La linea anterior es equivalente a decir cat = CAT_LIST[0] 
  const[indexCat, setIndexCat] = useState(0)

  const goBack = () => {
      console.log('go back')
      //let newIndex = indexCat - 1;
      let newIndex = indexCat == 0 ? CAT_LIST.length - 1 : indexCat - 1
      setIndexCat(newIndex)
      //setCat(CAT_LIST[newIndex])
  }

  const goNext = () => {
      console.log('go Next')
      let newIndex = indexCat == CAT_LIST.length - 1 ? 0 : indexCat + 1
      //let newIndex = indexCat + 1;
      setIndexCat(newIndex)
      //setCat(CAT_LIST[newIndex])
  }

  useEffect( () => {
    setCat(CAT_LIST[indexCat])

    return () => {
        // Puede estar vacío
        // Cerrar un socket para que no siga escuchando, etc
    } //Saneamiento
  }, [indexCat])

  return(
    <div className="navigation">
        <NavigationIcon onPress={goBack} name="arrow-undo" />
        <Couple
            image={cat.image}
            username={cat.username}
            description={cat.description}
        />
        <NavigationIcon onPress={goNext} name="arrow-redo" />
    </div>
  )  
}


    
