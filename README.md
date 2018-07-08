# Angular-HttpCalls-

Sometime we click multiple time on any action which is internally performs backend http call which are totally unused/call/bind/action so to avoid such repetitive call we use to unsubscribe from observables features

Please see the files attached for more details


I would cache the data per node using the following approach:

getData() {
  if (this.cachedData) {
    return Observable.of(this.cachedData);
  } else {
    return this.http.get(...)
          .map(res => res.json())
          .do((data) => {
            this.cachedData = data;
          });
  }
}
