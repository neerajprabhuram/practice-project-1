import { useState } from 'react'

import Card from './shared/Card'

const FeedbackForm = () => {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate our service?</h2>
        {/* rating component */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
