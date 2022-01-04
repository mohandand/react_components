import react from 'react';

const DropDown = () => {
    return(
        <div>
            <label for="BestCompanies">Best Companies</label>
            <select name="cars" id="cars">
                <option value="Apple">Apple</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Google">Google</option>
            </select>
        </div>
    )
}

export default DropDown