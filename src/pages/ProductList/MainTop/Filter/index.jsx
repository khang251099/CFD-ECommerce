import React from "react";


const Filter = (props) => {
  const {handleFilter, checked, checkedMin, checkedZToA, checkedAToZ} = props
  return (
    <form>
      <div className="filter__item-wrap --top">
        <div className="filter__item">
          <div className="filter-text">
            <input type="radio" checked={checked} onClick={() => handleFilter(!checked, 'max')} />
            <label>
              <p>Filter max price</p>
            </label>
          </div>
          <div className="filter-text">
            <input type="radio" checked={checkedMin} onClick={() => handleFilter(!checkedMin, 'min')} />
            <label>
              <p>Filter min price</p>
            </label>
          </div>
        </div>

        <div className="filter__item">
          <div className="filter-text">
            <input type="checkbox" value="Nbm" checked={checkedAToZ} onClick={() => handleFilter(!checkedAToZ, 'AToZ')} />
            <label>
              <p>Filter A to Z</p>
            </label>
            <div className="value">
              <label className="lb-value">
                <p>Nbm</p>
              </label>
            </div>
          </div>
        </div>
        <div className="filter__item">
          <div className="filter-text">
            <input type="checkbox" value="Nbm" checked={checkedZToA} onClick={() => handleFilter(!checkedZToA, 'ZToA')} />
            <label>
              <p>Filter Z to A</p>
            </label>
            <div className="value">
              <label className="lb-value">
                <p>Nbm</p>
              </label>
            </div>
          </div>
        </div>

        {/* <div className="filter__item">
          <div className="filter-text">
            <input type="checkbox" value="12" />
            <label>
              <p>Filter text</p>
            </label>
            <div className="value">
              <label className="lb-value">
                <p>12</p>
              </label>
            </div>
          </div>
          <div className="select">
            <select id="standard-select">
              <option>Select</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>
        </div> */}
      </div>

      {/* <div className="applied-filter">
        <label htmlFor="applied filters">Applied filters</label>
        <div>
          <Stack spacing={3} sx={{ width: 500 }}>
            <Autocomplete
              multiple
              id="tags-filled"
              options={top100Films.map((option) => option.title)}
              defaultValue={[top100Films[13].title]}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="apllied filters"
                  placeholder="Favorites"
                />
              )}
            />
          </Stack>
        </div>
      </div> */}
    </form>
  );
}

export default Filter;
