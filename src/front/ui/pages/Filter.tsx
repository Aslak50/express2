import React, { useState } from 'react'
import { getFilter } from '../../services/filterService'
import { FormGroup, TextArea } from '@blueprintjs/core'

export function Filter(): JSX.Element {
  const [filter, setFilter] = useState('')
  const [codes, setCodes] = useState('')

  getFilter(codes).then((result) => setFilter(result.replace(/\s/g, '')))

  return (
    <>
      <form>
        <FormGroup label="Tape tes skus séparés par une virgule, espace ou saut de ligne">
          <TextArea fill rows={10} id="filter" value={codes} onChange={(e) => setCodes(e.target.value)} />
        </FormGroup>
      </form>
      <span>Requête :</span>
      <div style={{ overflowY: 'scroll', paddingTop: '7px' }}>{filter}</div>
    </>
  )
}
