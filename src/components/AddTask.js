import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import MyToast from '../namespaces/Toast';

const AddTask = ({ lastId, onAddAppointment }) => {
  const clearData = {
    assigned: '',
    description: '',
  }

  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  const handleSubmit = () => {
    if (!(formData.assigned && formData.description)) {
      return MyToast.fire({
        icon: 'error',
        title: 'Missing fields!'
      })
    }
    
    const task = {
      id: lastId++,
      assigned: formData.assigned,
      description: formData.description,
      isDone: false,
    };

    onAddAppointment(task);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

  return (
    <div className="mt-5">
      <button
        onClick={() => { setToggleForm(!toggleForm) }}
        className={`bg-blue-400 hover:bg-blue-500 text-white px-2 py-3 w-full text-left ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}
      >
        <div>
          <BiPlus className="inline-block align-text-top text-xl mr-1" />Add Task
        </div>
      </button>
      {
        toggleForm &&
        <div className="text-white border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="flex flex-col">
            <div className="mt-1 sm:mt-5">
              <label htmlFor="assigned" className="block text-sm font-medium">Assigned</label>
              <input
                type="text"
                name="assigned"
                id="assigned"
                onChange={(evt) => { setFormData({ ...formData, assigned: evt.target.value }) }}
                value={formData.assigned}
                placeholder="Type here..."
                className="mt-2 rounded-sm py-1 w-full pl-3 text-black"
              />
            </div>
            <div className="mt-1 sm:mt-5">
              <label htmlFor="description" className="block text-sm font-medium">Description</label>
              <textarea type="text" name="description" id="description"
                onChange={(evt) => { setFormData({ ...formData, description: evt.target.value }) }}
                value={formData.description}
                placeholder="Describe the task here..."
                className="mt-2 rounded-sm py-1 w-full pl-3 text-black">
              </textarea>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="ml-3 inline-flex justify-center py-2 px-4 border-none shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none"
              >
                <div className="flex items-center">
                  <BiPlus className="text-lg mr-1" />
                  Create  
                </div>
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default AddTask;