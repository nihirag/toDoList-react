import React from 'react'

export default function TaskList(props) {
    const items = props.itemList;

    return (
        <div className="taskList">
            {
                items.map(item => {
                    return (

                        <div className='item' key={item.key}>
                            <p onClick={() => props.editItem(item.key)}>
                                {item.text}
                                <span>
                                    <i className='fa fa-trash' onClick={() => props.deleteItem(item.key)} />
                                </span>
                            </p>
                        </div>

                    )
                })
            }
        </div>
    )
}

