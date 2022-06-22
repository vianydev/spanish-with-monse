import './Select.css';
<div id='select-container'>
    <div id="select-box">
        <input type="checkbox" id="options-view-button" />
        <div id="select-button" class="brd">
            <div id="selected-value">
                <span>Select a platform</span>
            </div>
            <div id="chevrons">
                <FontAwesomeIcon class="i fas fa-chevron" icon={faChevronUp} />
                <FontAwesomeIcon class="i fas fa-chevron-down" icon={faChevronDown} />
            </div>
        </div>
        <div id="options">
            <div class="option">
                <input class="s-c top" type="radio" name="platform" value="codepen" />
                <input class="s-c bottom" type="radio" name="platform" value="codepen" />
                <i class="fab fa-codepen"></i>
                <span class="label">CodePen</span>
                <span class="opt-val">CodePen</span>
            </div>
            <div class="option">
                <input class="s-c top" type="radio" name="platform" value="dribbble" />
                <input class="s-c bottom" type="radio" name="platform" value="dribbble" />
                <i class="fab fa-dribbble"></i>
                <span class="label">Dribbble</span>
                <span class="opt-val">Dribbble</span>
            </div>
            <div class="option">
                <input class="s-c top" type="radio" name="platform" value="behance" />
                <input class="s-c bottom" type="radio" name="platform" value="behance" />
                <i class="fab fa-behance"></i>
                <span class="label">Behance</span>
                <span class="opt-val">Behance</span>
            </div>
            
            <div id="option-bg"></div>
        </div>
    </div>
</div>