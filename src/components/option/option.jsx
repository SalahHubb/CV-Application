

export default function Option({handleFormOption}) {

    return <div>
        <button onClick={() => handleFormOption('edit')}>Edit</button>
        <button onClick={() => handleFormOption('create')}>+ Create</button>
    </div>
}