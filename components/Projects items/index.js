import React, { useEffect, useState } from 'react'
import Item from './Item'
import ProjectItemAnim from './ProjectItemAnim'
import projects from './projects'

function Pitems() {

  const [projectItem, setProjectItem] = useState([])

  useEffect(() => {
    const filteredOne = projects.filter(item => item.homepage === true)
    if (filteredOne) {
      setProjectItem(filteredOne)
    }
  }, [])


  return (
    <>
      <div className=' grid grid-cols-1 gap-y-4'>
        <ProjectItemAnim>
          {
            projectItem && projectItem.map((item, index) => {
              return <Item
                key={index}
                value={item}
              />
            })
          }
        </ProjectItemAnim>
      </div>
    </>
  )
}

export default Pitems