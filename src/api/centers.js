import api, { consoleErr } from ".";
import axios from "axios";

export const getFilteredCenters = async (filter = { category: "", capacity: [] }) => {
    console.log('필터링 목록');

    const source = axios.CancelToken.source();
    const url = `/centers?category=${filter.category}?capacity=${filter.capacity}`;

    try {
        const response = await api.get(url , { cancelToken: source.token });
        return response;
    } catch (err) {
        consoleErr(err);
    } finally {
        source.cancel();
    }
};

export const getAllRecommendCenters = async (region=null) => {
    console.log('메인 추천 목록');

    const source = axios.CancelToken.source();
    // const url = '/allrecommends';
    const url = '../../data02/allrecommends.json';

    try {
        const response = await api.get(url, { cancelToken: source.token });
        return response;
    } catch (err) {
        consoleErr(err);
    } finally {
        source.cancel();
    }
};

export const getRecommendCenters = async (region=null) => {
    console.log('추천 목록');

    const source = axios.CancelToken.source();
    // const url = '/recommends';
    const url = '../../data02/recommends.json';

    try {
        const response = await api.get(url, { cancelToken: source.token });
        console.log(response);
        return response;
    } catch (err) {
        consoleErr(err);
    } finally {
        source.cancel();
    }
};

export const getSalesCenters = async (region=null) => {
    console.log('매매 목록');

    const source = axios.CancelToken.source();
    // const url = '/sales';
    const url = '../../data02/sales.json';

    try {
        const response = await api.get(url, { cancelToken: source.token });
        console.log(response);
        return response;
    } catch (err) {
        consoleErr(err);
    } finally {
        source.cancel();
    }
};
