import { useNavigate } from "react-router-dom";
import GetStrLocalized from '../../datas/GetStrLocalized'
import React, { useRef } from 'react'


function SearchInput({ language, searchValue }) {

	const navigate = useNavigate();
	const searchInputRef = useRef(null);

	function goOnSearchPageIfInputNotEmpty() {
		if (searchInputRef.current.value) {
			var urlizedValue = searchInputRef.current.value.replaceAll("'", " ");
			navigate('/' + language + '/' + GetStrLocalized(language, "search") + '/' + urlizedValue);
		}
	}

	function onInputKeyPressed(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			goOnSearchPageIfInputNotEmpty();
		}
	}


	return (
		<table className="hc-top-bar-center-css" style={{ width: "100.0%", height: 40 }}>
			<tbody>
				<tr>
					<td style={{ width: "20.0%" }}></td>
					<td style={{ width: "55.0%" }}>
						<input ref={searchInputRef} onKeyUp={onInputKeyPressed} type='text' defaultValue={decodeURI(searchValue)} className='form-control' placeholder={GetStrLocalized(language, "search")} style={{ height: 24 }} />
					</td>
					<td style={{ paddingLeft: 27, width: "5.0%" }}>
						<button onClick={goOnSearchPageIfInputNotEmpty} type="submit" className="btn-primary hc-search-btn unselectable btn" style={{ width: 48, height: 37, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 5 }}></button>
					</td>
					<td style={{ width: "20.0%" }}></td>
				</tr>
			</tbody>
		</table>
	)

}

export default SearchInput
