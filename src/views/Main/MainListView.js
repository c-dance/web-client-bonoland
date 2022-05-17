/*
- 맵
- 퀵메뉴 
- 빌딩목록
- 검색 영역
- 카테고리 필터 영역
- 라우터 영역
- 유저 퀵메뉴
- 지도툴
- 유틸 퀵메뉴

*/
import MainListContainer from '../../containers/Main/MainListContainer';
import SidePannelContaier from '../../containers/SidePannel/SidePannelContainer';
import MapContainer from '../../containers/Map/MapContainer';

const MainListView = () => (
    <div>
        <SidePannelContaier type={"main"}>
            <MainListContainer />
        </SidePannelContaier>
        {/* <MapContainer /> */}
    </div>
);

export default MainListView;
