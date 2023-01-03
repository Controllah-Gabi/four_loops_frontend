import React from 'react'

export const placeholder = () => {
  return (
    <div>
      <div className="present">
          <Navbar />
        <div className="present-2">
          <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<IndividualPost/>}/>
      </Routes>
        </div>
      </div>
    </div>
  )
}
